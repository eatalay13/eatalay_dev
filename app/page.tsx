import HomeContainer from "@container/home";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function HomePage() {
  await delay(5000);
  return <HomeContainer />;
}
