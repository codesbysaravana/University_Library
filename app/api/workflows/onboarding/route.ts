import { serve } from "@upstash/workflow/nextjs";
import emailjs from "@emailjs/browser";

type InitialData = {
  email: string;
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email } = context.requestPayload;

//STEP-1 send user a welcom email 
  await context.run("new-signup", async () => {
    await sendEmail("Welcome to the platform", email);
  });

  //STEP-2  waiting period for user after first signUp to send a email after 3 days
  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  //STEP-3 enters a INFINITE LOOP chech every month the users interactivity with platform
  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState();
    });

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail("Email to non-active users", email);
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail("Send newsletter to active users", email);
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30);
  }
});

async function sendEmail(message: string, email: string) {
  // Implement email sending logic here
  return emailjs.send(
    "service_ah60jft",
    "template_t78hh7n",
    { message, user_email: email },
    "wR6BrfiZFH_DFuMap"
  );
}

type UserState = "non-active" | "active";

const getUserState = async (): Promise<UserState> => {
  // Implement user state logic here
  
};


//copied from redis workflows user onboarding