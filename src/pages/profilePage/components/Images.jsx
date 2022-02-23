import { ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: '${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format',
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Images = () => {
    return (
        <ImageList
            variant="quilted"
            cols={3}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>

                </ImageListItem>
            ))}
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
            </ImageListItem>
        </ImageList>
    );
};

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-155196381-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    }
]

export default Images;