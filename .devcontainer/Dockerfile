FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:18-bullseye

ARG USERNAME=node

# Used to persist bash history as per https://code.visualstudio.com/remote/advancedcontainers/persist-bash-history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && mkdir /commandhistory \
    && touch /commandhistory/.bash_history \
    && chown -R $USERNAME /commandhistory \
    && echo "$SNIPPET" >> "/home/$USERNAME/.bashrc"

RUN npm install -g npm@latest npm-check-updates@latest @go-task/cli@latest
