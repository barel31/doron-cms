import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import ReactPlayer from 'react-player'

export default function YouTubePreview(props: PreviewProps) {
  const {title: url} = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? <ReactPlayer playing={false} controls={true} light={true} url={url} /> : <Text>Add a YouTube URL</Text>}
    </Flex>
  )
}
