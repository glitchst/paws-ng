import {faBluesky, faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons';

export const environment = {
  production: true,
  socialLinks: [
    {
      url: 'https://bsky.app/profile/mcnt.sh',
      faIcon: faBluesky,
      enabled: true,
    },
    {
      url: 'https://x.com/mac_floof',
      faIcon: faTwitter,
      enabled: true,
    },
    {
      url: 'https://discord.gg/EyakfCKnCY',
      faIcon: faDiscord,
      enabled: true,
    },
  ]
};
