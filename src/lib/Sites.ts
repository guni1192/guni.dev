import React from 'react'
import {FaBlog, FaGithub, FaLinkedin, FaSpeakerDeck, FaTwitter} from 'react-icons/fa'

export type SitesProps = {
    title: string,
    url: string,
    icon: string|React.FunctionComponent<{}>|React.ComponentClass<{}, any>,
    colorScheme: string
}

export const sitesData: SitesProps[] = [
    {
        title: 'GitHub',
        url: 'https://github.com/guni1192',
        icon: FaGithub,
        colorScheme: 'blackAlpha'
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/guni1192',
        icon: FaTwitter,
        colorScheme: 'twitter'
    },
    {
        title: 'Blog',
        url: 'https://blog.guni.dev',
        icon: FaBlog,
        colorScheme: 'orange'
    },
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/takashi-iiguni',
        icon: FaLinkedin,
        colorScheme: 'linkedin'
    },
    {
        title: 'SpeakerDeck',
        url: 'https://speakerdeck.com/guni1192',
        icon: FaSpeakerDeck,
        colorScheme: 'cyan'
    },
]
