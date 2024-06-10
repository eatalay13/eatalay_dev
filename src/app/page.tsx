import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex-col-reverse space-x-4 space-y-4 m-3">
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
      <div className="h-72 bg-green-900">

      </div>
    </main>
  );
}
