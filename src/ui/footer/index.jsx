import { Foot, SocialIcons } from "./style"

export default function Footer() {

    return(
        <Foot>
            <p>© 2023 | Made with React and Vite</p>
            <div>
                <SocialIcons className="fa-brands fa-instagram" aria-label="instagram icon"></SocialIcons>
                <SocialIcons className="fa-brands fa-facebook" aria-label="facebook icon"></SocialIcons>
            </div>
        </Foot>
    )
}