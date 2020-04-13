import React from 'react';
import {
	faFacebookF,
	faTwitter,
	faSpotify,
	faSoundcloud,
	faBandcamp,
	faYoutube,
	faSteam,
	faPlaystation,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import Va11HallaBanner from '../img/Va11-hall-aBanner.gif';

/** PNG Formats */
import Va11HallaBGPNG from '../img/Va11-hall-aBG.png';
import Va11HallaLogoPNG from '../img/Va11-hall-aLogo.png';
import YuppieBGPNG from '../img/YuppieBG.png';
import YuppieBannerPNG from '../img/YuppieBanner.png';
import YuppieLogoPNG from '../img/YuppieLogo.png';
import BushidenBGPNG from '../img/BushidenBG.png';
import BushidenBannerPNG from '../img/BushidenBanner.png';
import BushidenLogoPNG from '../img/BushidenLogo.png';
import MichaelPNG from '../img/Michael.png';

import Va11HallaCoverPNG from '../img/Va11HallaCover.png';
import Va11HallaExCoverPNG from '../img/Va11HallaExCover.png';
import Va11HallaPrologueCoverPNG from '../img/Va11HallaPrologueCover.png';
import YuppieCoverPNG from '../img/YuppieCover.png';
import SukebanCoverPNG from '../img/SukebanCover.png';
import PassengerCoverPNG from '../img/PassengerCover.png';
import BlueCoverPNG from '../img/BlueCover.png';

/** WebP Formats */
import Va11HallaBG from '../img/Va11-hall-aBG.webp';
import Va11HallaLogo from '../img/Va11-hall-aLogo.webp';
import YuppieBG from '../img/YuppieBG.webp';
import YuppieBanner from '../img/YuppieBanner.webp';
import YuppieLogo from '../img/YuppieLogo.webp';
import BushidenBG from '../img/BushidenBG.webp';
import BushidenBanner from '../img/BushidenBanner.webp';
import BushidenLogo from '../img/BushidenLogo.webp';
import Michael from '../img/Michael.webp';

import Va11HallaCover from '../img/Va11HallaCover.webp';
import Va11HallaExCover from '../img/Va11HallaExCover.webp';
import Va11HallaPrologueCover from '../img/Va11HallaPrologueCover.webp';
import YuppieCover from '../img/YuppieCover.webp';
import SukebanCover from '../img/SukebanCover.webp';
import PassengerCover from '../img/PassengerCover.webp';
import BlueCover from '../img/BlueCover.webp';

const AboutInfo = {
	info: <div><p>Michael Kelly is a composer for video games and animation under the moniker &quot;Garoad&quot;. He is best known for composing the soundtracks to the acclaimed VA-11 HALL-A and other games such as Yuppie Psycho and the upcoming Bushiden.</p><p>For each project, Michael takes great care to create a unique, memorable identity through its music and fully immerse players in its world. Having been captivated by video games, Japanese anime, and their soundtracks since a young age, Michael has a thorough understanding of what resonates with players and viewers. </p></div>,
	image: {
		webp: Michael,
		png: MichaelPNG,
	},
};

const Projects = [
	{
		name: 'VA-11 Hall-A: Cyberpunk Bartender Action',
		url: 'va11-hall-a',
		developer: 'Subkeban Games',
		publisher: 'Ysbryd Games, AGM PLAYISM',
		release: '21 Jun, 2016',
		background: {
			webp: Va11HallaBG,
			png: Va11HallaBGPNG,
		},
		banner: {
			webp: Va11HallaBanner,
			png: Va11HallaBanner,
		},
		logo: {
			webp: Va11HallaLogo,
			png: Va11HallaLogoPNG,
		},
		logoNoMargin: false,
		embed: 'https://bandcamp.com/EmbeddedPlayer/album=2706423874/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/',
		trailer: 'https://www.youtube.com/embed/7x393waFKDw',
		quote: 'Music plays a rather significant role in the development of a few of the characters, in addition to the traditional score being marvellous. Provided by Michael Kelly – who goes by Garoad – the soundtrack is a cyberpunk enthusiast’s dream.',
		quoteAuthor: 'Push Square',
		info: <div><p>VA-11 HALL-A: Cyberpunk Bartender Action is a booze em&apos; up about waifus, technology, and post-dystopia life.</p><p>In this world, corporations reign supreme, all human life is infected with nanomachines designed to oppress them, and the terrifying White Knights ensure that everyone obeys the laws. </p><p>But, this is not about those people.</p><p>You are a bartender at VA-11 HALL-A, affectionately nicknamed &quot;Valhalla.&quot; Although it is just a small bar downtown, it attracts the most fascinating people this side of dystopia. Keep your clients lubricated and you will be made privy to the most interesting stories.</p></div>,
		links: [
			{
				name: 'Purchase Soundtrack',
				icon: faLink,
				url: 'https://blackscreenrecords.com/products/va-11-hall-a',
			},
			{
				name: 'Website',
				icon: faLink,
				url: 'https://waifubartending.com/',
			},
			{
				name: 'Steam',
				icon: faSteam,
				url: 'https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/',
			},
			{
				name: 'Nintendo Switch',
				icon: faLink,
				url: 'https://www.nintendo.com/games/detail/va-11-hall-a-cyberpunk-bartender-action-switch/',
			},
			{
				name: 'PlayStation 4',
				icon: faPlaystation,
				url: 'https://store.playstation.com/en-us/product/UP2251-CUSA15402_00-VA11HALLANA00000',
			},
		],
	},
	{
		name: 'Yuppie Psycho',
		url: 'yuppie-psycho',
		developer: 'Baroque Decay',
		publisher: 'Another Indie',
		release: '25 Apr, 2019',
		background: {
			webp: YuppieBG,
			png:  YuppieBGPNG,
		},
		banner: {
			webp: YuppieBanner,
			png: YuppieBannerPNG,
		},
		logo: {
			webp: YuppieLogo,
			png: YuppieLogoPNG,
		},
		logoNoMargin: true,
		embed: 'https://bandcamp.com/EmbeddedPlayer/album=3296452031/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/',
		trailer: 'https://www.youtube.com/embed/h92g7E2WYtc',
		quote: 'Yuppie Psycho manages to maintain a consistently tense and dreadful atmosphere. This is in part thanks to the absolutely incredible sound design and music of the game. The soundtrack elevates every scene of the game with ominous tunes and adrenaline-building beats, and the moments where the soundtrack cuts out entirely are often the most terrifying of all.',
		quoteAuthor: 'The Sixth Axis',
		info: <div><p className="lead">First day at a new job? What a nightmare! </p><p>Join Brian Pasternack, a young man with no future in a dystopian 90s society, on his first day at one of the world’s largest companies, Sintracorp. Uncertain, unprepared, and massively unqualified, will Pasternack have what it takes to shine in Sintracorp’s hierarchy? It all depends on how he performs on his first assignment… and whether he survives it.</p><p>During his unconventional employee orientation, Pasternack discovers what his new job really entails: hunting a “witch” whose powers made the success of the corporation possible in the first place, but who now seems to have returned to torment its employees. Brian will meet all kinds of odd characters, escape from terrible creatures, and unravel the hidden secrets of Sintracorp’s dark past.</p></div>,
		style: {
			logo: {
				maxWidth: '300px',
				top: 'auto',
				bottom: '0',
				transform: 'translate(-50%, 0)',
			},
		},
		links: [
			{
				name: 'Purchase Soundtrack',
				icon: faLink,
				url: 'https://blackscreenrecords.com/products/yuppie-psycho-original-soundtrack-by-garoad',
			},
			{
				name: 'Website',
				icon: faLink,
				url: 'http://yuppiepsycho.com/',
			},
			{
				name: 'Steam',
				icon: faSteam,
				url: 'https://store.steampowered.com/app/597760/Yuppie_Psycho/',
			},
		],
	},
	{
		name: 'Bushiden',
		url: 'bushiden',
		developer: 'Pixel Arc Studios',
		publisher: 'Pixel Arc Studios',
		release: '2021',
		background: {
			webp: BushidenBG,
			png: BushidenBGPNG,
		},
		banner: {
			webp: BushidenBanner,
			png: BushidenBannerPNG,
		},
		logo: {
			webp: BushidenLogo,
			png: BushidenLogoPNG,
		},
		logoNoMargin: false,
		embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/602766495&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
		trailer: 'https://www.youtube.com/embed/cWb8L6IqZBA',
		quote: 'To be released 2021.',
		quoteAuthor: undefined,
		info: <div><p className="lead">End if once and for all!</p><p>Your sister has vanished and rumors swirl that Gaoh has been resurrected with an evil army at his command. Explore for cybernetic upgrades until you are powerful enough to defeat the diabolic Gaoh and his cybergentic army once and for all in this futuristic, action platformer!</p><p>Features</p><ul><li>7 levels to explore plus a prologue area!</li><li>Survive epic boss fights to unlock new traversal and combat abilities!</li><li>Unique &quot;crowd control&quot; combat system gives the player powerful options for dispatching hordes of foes!</li><li>Revisit levels with upgraded abilities to unlock new areas and become more powerful!</li><li>Beautifully drawn and animated pixel art!</li><li>Purchase upgrades and Chi Spell Attacks from the Tech Shop!</li></ul></div>,
		links: [
			{
				name: 'Website',
				icon: faLink,
				url: 'http://www.bushiden.com/',
			},
			{
				name: 'Steam',
				icon: faSteam,
				url: 'https://store.steampowered.com/app/1046920/Bushiden/',
			},
		],
	},
];

const Albums = [
	{
		cover: {
			webp: YuppieCover,
			png: YuppieCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/yuppie-psycho-original-soundtrack',
		title: 'Yuppie Psycho Original Soundtrack',
	},
	{
		cover: {
			webp: Va11HallaCover,
			png: Va11HallaCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/va-11-hall-a-second-round',
		title: 'VA011 HALL-A - Second Round',
	},
	{
		cover: {
			webp: Va11HallaPrologueCover,
			png: Va11HallaPrologueCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/va-11-hall-a-prologue-ost-sounds-from-the-future',
		title: 'VA-11 HALL-A Prologue OST - Sounds From The Future',
	},
	{
		cover: {
			webp: Va11HallaExCover,
			png: Va11HallaExCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/va-11-hall-a-ex-bonus-tracks-collection',
		title: 'VA-11 HALL-A EX - Bonus Tracks Collection',
	},
	{
		cover: {
			webp: PassengerCover,
			png: PassengerCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/passenger-ep',
		title: 'Passenger EP',
	},
	{
		cover: {
			webp: BlueCover,
			png: BlueCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/blue',
		title: 'Blue',
	},
	{
		cover: {
			webp: SukebanCover,
			png: SukebanCoverPNG,
		},
		url: 'https://garoad.bandcamp.com/album/sukeban-ep',
		title: 'Sukeban EP',
	},
];

const Socials = [
	{
		url: 'https://www.facebook.com/garoadmusic/',
		id: 'facebook',
		name: 'Facebook',
		icon: faFacebookF,
	},
	{
		url: 'https://twitter.com/garoadmusic',
		id: 'twitter',
		name: 'Twitter',
		icon: faTwitter,
	},
	{
		url: 'https://www.youtube.com/user/garoad',
		id: 'youtube',
		name: 'YouTube',
		icon: faYoutube,
	},
	{
		url: 'https://open.spotify.com/artist/1oMOdABcJgXgiplesecR1U',
		id: 'spotify',
		name: 'Spotify',
		icon: faSpotify,
	},
	{
		url: 'https://garoad.bandcamp.com/',
		id: 'bandcamp',
		name: 'Bandcamp',
		icon: faBandcamp,
	},
	{
		url: 'https://soundcloud.com/garoadmusic',
		id: 'soundcloud',
		name: 'Soundcloud',
		icon: faSoundcloud,
	},
];

export {
	AboutInfo,
	Projects,
	Albums,
	Socials,
};