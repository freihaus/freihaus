import TextCard from "@/components/TextCard";
import SmallHeadText from "../../Header/SmallHeadText";
import PictureRight from "../pictureRight";

export default function Angebot() {
    return (

                <div>
                    <PictureRight
                        headText="Unser Angebot"
                        cardHeader="Vergangenheit würdigen, Gegenwart gestalten, Zukunft sichern"
                        cardContent="Wir erschaffen Räume, die die Vergangenheit ehren und der
                        Gegenwart gerecht werden, um eine nachhaltige Zukunft zu
                        sichern. Durch intensive Quellenarbeit und maßgeschneiderte
                        Umbauten verbinden wir historisches Erbe mit modernen
                        Bedürfnissen, ohne die Seele des Raumes zu verlieren."
                        imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/angebot.webp"
                    />
                </div>
    )
}