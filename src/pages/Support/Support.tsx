import styles from "./Support.module.css";
import { useState } from "react";

function Support() {
  const questions = [
    {
      id: 1,
      title: "How do I set up my Quest 2 for the first time?",
      answer:
        "Charge your headset using the included cable and install the Oculus mobile app. Sign in or create an account, then follow the on-screen instructions to pair your headset and controllers. Once setup is complete, you can start exploring VR immediately.",
    },
    {
      id: 2,
      title: "Why is my headset not connecting to Wi-Fi?",
      answer:
        "Make sure your Wi-Fi network is stable and within range. Restart your headset and router, then reconnect through settings. If the issue continues, forget the network and add it again manually.",
    },
    {
      id: 3,
      title: "What should I do if tracking is not working properly?",
      answer:
        "Ensure you are in a well-lit environment and avoid reflective surfaces like mirrors. Clean the cameras on your headset and make sure nothing is blocking them.",
    },
    {
      id: 4,
      title: "My controllers are not responding. How can I fix it?",
      answer:
        "Check and replace the batteries if needed. Restart your headset or re-pair the controllers through the device settings. If the problem persists, reconnect them via the Oculus app.",
    },
    {
      id: 5,
      title: "How can I improve performance in games?",
      answer:
        "Close background apps and restart your headset regularly. Make sure your system is up to date. Lower in-game graphics settings if you notice lag or performance drops.",
    },
    {
      id: 6,
      title: "How do I check my order status?",
      answer:
        "Log into your account and open your order history. Once your order is shipped, you will receive a confirmation email with tracking details.",
    },
    {
      id: 7,
      title: "What does the warranty cover?",
      answer:
        "The warranty covers manufacturing defects and hardware issues under normal use. It does not include accidental damage or misuse.",
    },
    {
      id: 8,
      title: "How can I request a repair or replacement?",
      answer:
        "Submit a support request with details about your issue. Our team will review your case and guide you through the repair or replacement process.",
    },
    {
      id: 9,
      title: "How should I take care of my headset?",
      answer:
        "Avoid direct sunlight on the lenses, keep the device clean, and store it safely. Take breaks during long sessions to prevent discomfort.",
    },
    {
      id: 10,
      title: "How can I contact support?",
      answer:
        "You can contact our support team via email or phone. We typically respond within 24 hours and will help resolve your issue as quickly as possible.",
    },
  ];
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <main>
      <section className={styles.support}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.paragraph}>
          We’re here to help you get the most out of your Quest 2. Browse the
          most common questions below or expand a topic to find detailed answers
          and step-by-step guidance.
        </p>
        <div className={styles.accordion}>
          {questions.map((question) => {
            const isOpen = activeId === question.id;

            return (
              <div
                key={question.id}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleQuestion(question.id)}
                >
                  <span>{question.title}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>

                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>
                    <p className={`additional-text ${styles.answerParagraph}`}>{question.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Support;
