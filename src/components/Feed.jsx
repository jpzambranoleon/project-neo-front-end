import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { Box, CardActions, Checkbox } from '@mui/material';
import { Bookmark, BookmarkBorderOutlined, Favorite, FavoriteBorderOutlined, MessageOutlined, ShareOutlined } from '@mui/icons-material';
import { useState } from 'react';

function Media(props) {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    return (
        <Card sx={{ mb: 2 }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar
                            alt="Diana Ayi"
                            src="/assets/person/diana.jpg"
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        'Diana Ayi'
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        '5 hours ago'
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{ height: 330 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    image="/assets/post/post5.jpg"
                    alt="Nicola Sturgeon on a TED talk stage"
                />
            )}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                <Typography variant="body2" color="text.secondary" component="p">
                    {
                        "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                    }
                </Typography>
                )}
            </CardContent>
            {loading ? null : (
                <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                    <Box>
                        <Checkbox icon={<FavoriteBorderOutlined />} checkedIcon={<Favorite color='error' />} />
                        <IconButton>
                            <MessageOutlined />
                        </IconButton>
                        <IconButton>
                            <ShareOutlined />
                        </IconButton>
                    </Box>
                    <Box>
                        <Checkbox icon={<BookmarkBorderOutlined />} checkedIcon={<Bookmark />} />
                    </Box>
                </CardActions>
                )
            }
        </Card>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

const Feed = () => {
  return (
        <div>
            <Media />
            <Media />
        </div>
    );
}

export default Feed;