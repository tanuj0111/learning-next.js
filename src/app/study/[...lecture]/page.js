"use client"
export default function Lecture({params}) {
    console.log(params)

    return (
        <div>
            <h1>Day of collage {params.lecture[0]} </h1>
            <h2> Lecture no. {params.lecture[1]} </h2>
        </div>
    )
}