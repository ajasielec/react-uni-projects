type CounterProps = {
    value: number;
}

export const Counter = ({value}: CounterProps) => { //counter przyjmuje value
    return <div>{value}</div>;
}