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
import { Users } from '../dummyData';


const Post = ({post}) => {

    console.log(post);

    Post.propTypes = {
        loading: PropTypes.bool,
    };

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
                            alt=""
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
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
                        Users.filter((u) => u.id === post?.userId)[0].username
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        post.date
                    )
                }
            />
            {loading ? null : (
                <CardContent>
                    <Typography>
                        {post?.desc}
                    </Typography>
                </CardContent>
                )
            }
            
            {loading ? (
                <Skeleton sx={{ height: 330 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    image={post.photo}
                />
            )}
            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }}/>
                        <Skeleton animation="wave" height={10} />
                    </React.Fragment>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">
                            104 likes
                        </Typography>
                        <Typography variant="body2">
                            5 comments
                        </Typography>
                    </Box>
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
};

export default Post;