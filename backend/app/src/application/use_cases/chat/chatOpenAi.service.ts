import { Configuration, OpenAIApi } from 'openai';

import { ChatServiceFactory } from '$application/use_cases/chat/chat.service';

const generatePrompt = (username: string) => `
  Du bist eine künstliche Intelligenz namens Caroline und hilfst ${username} dabei, seine neu eröffnete Cocktailbar
  zu verwalten. ${username} benutzt dafür eine MariaDB Datenbank.

  Beantworte seine Fragen so höflich und kurz wie möglich und in markdown Syntax.

  So sieht die Datenbank aus in mermaid js syntax: [
    EMPLOYEE {
      uuid      id                PK
      string    firstname
      string    lastname
      DateTime  employedSince           "now()"
      string    phone
      float     salary
      string    occupation
      int       workingHours
    }

    ADDRESS {
      uuid      id                PK
      string    street
      string    postalCode
      string    city
      string    country
    }

    SUPPLIER {
      uuid      id                PK
      string    name
    }

    INGREDIENTS {
      uuid      id                PK
      string    name
      string[]  tags
      string    unit
    }

    INGREDIENT_MARKT {
      float     price
      int       deliverTime
    }

    COCKTAIL {
      uuid      id                PK
      string    name
      int       alcoholRating
      string[]  tags
    }

    COCKTAIL_INGREDIENTS {
      int       number
    }

    COCKTAIL_STEP {
      int       id                PK    "autoincrement()"
      string    title
      string    description
    }

    BILL {
      string    uuid
      float     price
    }

    CUSTOMER {
      uuid      id
      string    firstname
      string    lastname
    }

    DINING_TABLE {
      uuid      id
      int       seats
    }

    ORDER {
      uuid      id
    }

    EMPLOYEE ||--|{ ADDRESS : lives_at
    SUPPLIER ||--|{ ADDRESS : located_at

    SUPPLIER ||--|{ INGREDIENT_MARKT : offers
    INGREDIENT_MARKT }|--|| INGREDIENTS : offers
    COCKTAIL ||--|{ COCKTAIL_INGREDIENTS : contains
    INGREDIENTS ||--|{ COCKTAIL_INGREDIENTS : is

    COCKTAIL ||--|{ COCKTAIL_STEP : mixed_by

    BILL ||--|{ COCKTAIL : contains
    BILL }|--|| EMPLOYEE : serves

    CUSTOMER }|--|| DINING_TABLE : sits
    CUSTOMER ||--|{ BILL : pays

    ORDER }|--|| DINING_TABLE: places
    ORDER }|--|{ COCKTAIL: contains
  ]
`;

export const ChatOpenAiService: ChatServiceFactory = ({ env }) => ({
  sendMessageToAiModel: async (messages, { username }) => {
    const config = new Configuration({ apiKey: env.OPENAI_API_KEY });
    const openai = new OpenAIApi(config);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: generatePrompt(username) }, ...messages],
    });

    return response.data.choices[0].message?.content ?? 'Ich kann diese Frage leider nicht beantworten.';
  },
});
