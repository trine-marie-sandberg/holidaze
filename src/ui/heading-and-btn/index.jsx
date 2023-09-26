import { HeaderBtnWrap, NewListingBtn } from "./style";

export default function HeadingAndBtn(props) {

    const [
        setFormVisible,
        heading,
        icon
    ] = props.children;
    return(
        <HeaderBtnWrap>
        {heading}
        <NewListingBtn onClick={() => {
            setFormVisible(true);
        }}>
            {icon}
        </NewListingBtn>
        </HeaderBtnWrap>
    )
}