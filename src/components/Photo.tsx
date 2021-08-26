

interface IPhoto {
    src?: string,
    alt: string | undefined,
    width?: number,
    height?: number
}

const Photo = (props: IPhoto) => {

    const photoProps = {...props};

    console.log("props", photoProps)

    return (
        <div className="container mx-auto px-4">
            <img 
                className="w-32 h-32 rounded-full mx-auto" 
                src={photoProps.src} 
                alt="" 
                width={photoProps.width} 
                height={photoProps.height} 
                />
        </div>
    )
}

export default Photo