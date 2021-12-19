import * as React from "react";
import PropTypes from "prop-types";


export default function YoutubeVideo({link}) {
    return (
<iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
};

YoutubeVideo.propTypes = {
    link: PropTypes.string.isRequired,
  };