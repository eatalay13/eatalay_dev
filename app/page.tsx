import HomeContainer from "@container/home";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function HomePage() {
  await delay(1000);
  return <HomeContainer />;
}
