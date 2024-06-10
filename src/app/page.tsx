import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex w-full space-x-4">
      <Button variant="primary">
        Primary
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button variant="success">
        Success
      </Button>
      <Button variant="info">
        Info
      </Button>
      <Button variant="warning">
        Warning
      </Button>
      <Button variant="danger">
        Danger
      </Button>
      <Button variant="light">
        Light
      </Button>
      <Button variant="dark">
        Dark
      </Button>
      <Button variant="link">
        Link
      </Button>
    </main>
  );
}
