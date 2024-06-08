import { InfoChoose } from "../interfaces"

interface Props {
    infoChoose: InfoChoose
}

const WhyChooseCard = ({infoChoose}: Props) => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <img src={infoChoose.image} alt="Imagen" className="self-start"/>
            <h3 className="text-2xl font-normal font-PublicSans mb-4 text-Dark-Blue">{infoChoose.title}</h3>
            <p className="text-lg mb-6 font-PublicSans font-normal text-Grayish-Blue">{infoChoose.caption}</p>
        </div>
    )
}

export default WhyChooseCard
