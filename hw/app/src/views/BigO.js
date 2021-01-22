import React from 'react'
import { Line } from 'react-chartjs-2'


export function bigOCalculator(func) {
    const t0 = performance.now()
    const time_keeper = [0]
    const timeKeeper = function () {
        console.log(typeof t0)
        time_keeper.push((performance.now() - t0))
    }
    func(timeKeeper)
    return time_keeper
}

export default function BigO() {
    const [work, setWork] = React.useState(10)
    const [update, forceUpdate] = React.useState(false)
    console.log(work, '<---')
    const arr = Array(work)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i
    }
    const n = arr.length
    console.log(n)

    const liner = function (recordTime) {
        for (let i = 0; i < n; i++) {
            recordTime()
        }
    }

    const quadratic = function (recordTime) {
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) { }
            recordTime()
        }
    }

    const quibic = function (recordTime) {
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                for (let k = j; k < n; k++) { }
            }
            recordTime()
        }
    }

    const log = function (recordTime) {
        for (let i = 2; i <= n; i = i * 2) {
            recordTime()
        }
    }


    const data = {
        labels: arr,
        datasets: [
            {
                label: 'Liner',
                backgroundColor: 'rgba(255, 0, 0,0.5)',
                borderColor: 'rgba(255, 0, 0,0.5)',
                data: bigOCalculator(liner),
                fill: false,
            },
            {
                label: 'Quadratic',
                backgroundColor: 'rgba(0, 252, 0,0.5)',
                borderColor: 'rgba(0,252,0,0.5)',
                data: bigOCalculator(quadratic),
                fill: false,
            },
            {
                label: 'Quibic',
                backgroundColor: 'rgba(0, 0, 255,0.5)',
                borderColor: 'rgba(0,0,255,0.5)',
                data: bigOCalculator(quibic),
                fill: false,
            },
            {
                label: 'Log',
                backgroundColor: 'rgba(0, 255, 255,0.5)',
                borderColor: 'rgba(0,255,255,0.5)',
                data: bigOCalculator(log),
                fill: false,
            },

        ]
    }
    return (
        <div style={{ width: '75%' }}>
            <Line
                data={data}
                options={{
                    title: {
                        display: true,
                        text: "Correct Rating of Labels per Rater per Day",
                        fontSize: 20
                    },

                    responsive: true,
                }}
            />
            <select onChange={e => setWork(parseInt(e.target.value))} value={work}>
                <option value={10}>10</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
            </select>
            <button onClick={() => forceUpdate(update => update = !update)}>Re-Calculate</button>
            <h1>{work}</h1>
        </div>
    )
}