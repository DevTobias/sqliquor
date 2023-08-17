ALTER TABLE "user" ADD COLUMN "sandbox_created" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "sandbox_password" uuid DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "message_history" text[] DEFAULT '{}' NOT NULL;