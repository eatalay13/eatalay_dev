export enum RobotType {
    INDEX = 'index',
    NOINDEX = 'noindex',
}

interface Props {
    robotType: RobotType;
}

export default function Robots(props: Props) {

    let { robotType = RobotType.INDEX } = props;

    let content: string = robotType == RobotType.NOINDEX ? 'noindex' : 'index';

    return <meta name="robots" content={content} />;
}