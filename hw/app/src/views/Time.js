import { Bar } from 'react-chartjs-2'

export default function Time() {

    return (
        <Bar
            data={{
                datasets: [{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]
            }}
        />
    )
}