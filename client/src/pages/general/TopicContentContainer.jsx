import React from 'react'
import { useViewTopicContentQuery } from '../../services/apiSlice'

const TopicContentContainer = () => {
    const topicContentInfo = useViewTopicContentQuery()

  return (
    <div></div>
  )
}

export default TopicContentContainer