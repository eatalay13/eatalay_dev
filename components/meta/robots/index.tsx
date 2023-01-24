export enum RobotType {
    INDEX = 'index,follow',
    NOINDEX = 'noindex',
}

interface Props {
    robotType: RobotType;
}

export default function Robots(props: Props): JSX.Element {

    let { robotType = RobotType.INDEX } = props;

    let content: string = robotType;

    return <meta name="robots" content={content} />;
}