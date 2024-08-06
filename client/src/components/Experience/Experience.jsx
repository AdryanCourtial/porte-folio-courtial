export function Experience({date, name, image, position}) {
    return (
        <div className="h-[80vh] w-full flex gap-40 items-center justify-center">
            <div className="bg-my-white h-full w-12 col-start-2">
                <div className="relative h-36 w-36 bg-primary-color p-12 border-[8px] -left-12 top-[25vh] rounded-full border-my-white">
                    <span className="relative top-2 -left-2 w-auto"> SSSSSS</span>
                </div>
            </div>
            <div className={`bg-secondary-color h-[40vh] w-[20vw] rounded-2xl col-start-3 `}>
                JE SUIS LA DIV
            </div>
        </div>
    )
}