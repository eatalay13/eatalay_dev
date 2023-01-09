import Robots, { RobotType } from "@comp/robots";

export default function Head() {
  return (
    <>
      <title>Emrah Atalay</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Emrah Atalay Kişisel Web Sitesi" />
      <Robots robotType={RobotType.NOINDEX}/>
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
