import ContactContainer from "@/containers/contact";

async function ContactPage() {
  function simulateLoading() {
    return new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
  }
  await simulateLoading();
  return <ContactContainer />;
}

export default ContactPage;
