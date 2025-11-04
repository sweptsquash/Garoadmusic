<?php

namespace Database\Seeders;

use App\Models\Album;
use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $albums = collect([
            [
                'name' => 'Sukeban EP',
                'url' => 'https://garoad.bandcamp.com/album/sukeban-ep',
                'image' => 'https://f4.bcbits.com/img/a2192495570_2.jpg',
            ],
            [
                'name' => 'Blue',
                'url' => 'https://garoad.bandcamp.com/album/blue',
                'image' => 'https://f4.bcbits.com/img/a3649387320_2.jpg',
            ],
            [
                'name' => 'From My Star to Yours',
                'url' => 'https://garoad.bandcamp.com/track/from-my-star-to-yours',
                'image' => 'https://f4.bcbits.com/img/a3649328883_2.jpg',
            ],
            [
                'name' => 'Fight on Beat',
                'url' => 'https://garoad.bandcamp.com/track/fight-on-beat',
                'image' => 'https://f4.bcbits.com/img/a3655819671_2.jpg',
            ],
            [
                'name' => 'Passenger EP',
                'url' => 'https://garoad.bandcamp.com/album/passenger-ep',
                'image' => 'https://f4.bcbits.com/img/a3866060443_2.jpg',
            ],
        ]);

        $albums->each(function ($album): void {
            $albumModel = Album::query()->create(Arr::except($album, 'image'));

            if (Arr::has($album, 'image')) {
                $albumModel->addMediaFromUrl(Arr::get($album, 'image'))->toMediaCollection('cover');
            }
        });

        $data = collect([
            [
                'name' => 'Bushiden',
                'slug' => 'bushiden',
                'description' => '<p>End if once and for all!</p><p>Your sister has vanished and rumors swirl that Gaoh has been resurrected with an evil army at his command. Explore for cybernetic upgrades until you are powerful enough to defeat the diabolic Gaoh and his cybergentic army once and for all in this futuristic, action platformer!</p><p>Features</p><ul><li>7 levels to explore plus a prologue area!</li><li>Survive epic boss fights to unlock new traversal and combat abilities!</li><li>Unique &quot;crowd control&quot; combat system gives the player powerful options for dispatching hordes of foes!</li><li>Revisit levels with upgraded abilities to unlock new areas and become more powerful!</li><li>Beautifully drawn and animated pixel art!</li><li>Purchase upgrades and Chi Spell Attacks from the Tech Shop!</li></ul>',
                'developer' => 'Pixel Arc Studios',
                'publisher' => 'Pixel Arc Studios',
                'release_date' => null,
                'bandcamp_embed_url' => 'https://bandcamp.com/EmbeddedPlayer/album=4235610369/size=large/bgcol=333333/linkcol=ffffff/transparent=true/',
                'youtube_embed_url' => 'https://www.youtube.com/embed/cWb8L6IqZBA',
                'quote' => null,
                'quote_author' => null,
                'links' => [
                    [
                        'name' => 'Website',
                        'icon' => 'link',
                        'url' => 'http://www.bushiden.com/',
                    ],
                    [
                        'name' => 'Steam',
                        'icon' => 'steam',
                        'url' => 'https://store.steampowered.com/app/1046920/Bushiden/',
                    ],
                ],
                'albums' => [
                    [
                        'name' => 'Bushiden Original Soundtrack',
                        'url' => 'https://garoad.bandcamp.com/album/bushiden-original-soundtrack',
                        'image' => 'https://f4.bcbits.com/img/a0567786752_2.jpg',
                    ],
                ],
            ],
            [
                'name' => 'Catechesis',
                'slug' => 'catechesis',
                'description' => "<p>Embrace the darkness as a demon-possessed altar boy in this Horror RPG. Explore the city, battle demons, upgrade your weapons, and embark on an unforgettable journey with unique characters and anime-style cutscenes.</p><p>Daniel, an altar boy from a fringe religion, becomes possessed by a demon. Now, every good deed he does opens a gateway to hell. He must be virtuous during the day and battle demons at night. Trying to save his grandpa's life without dooming the world to eternal hellfire.</p>",
                'developer' => 'Baroque Decay',
                'publisher' => 'Baroque Decay',
                'release_date' => null,
                'show_logo' => false,
                'bandcamp_embed_url' => 'https://bandcamp.com/EmbeddedPlayer/album=1974879065/size=large/bgcol=333333/linkcol=ffffff/transparent=true/',
                'youtube_embed_url' => 'https://www.youtube.com/embed/MvCPf9B6J3Y',
                'links' => [
                    [
                        'name' => 'Website',
                        'icon' => 'link',
                        'url' => 'https://baroquedecay.com/',
                    ],
                    [
                        'name' => 'Steam',
                        'icon' => 'steam',
                        'url' => 'https://store.steampowered.com/app/2593320/Catechesis/',
                    ],
                ],
                'albums' => [
                    [
                        'name' => 'Catechesis - EP',
                        'url' => 'https://garoad.bandcamp.com/album/catechesis-ep',
                        'image' => 'https://f4.bcbits.com/img/a2906050615_2.jpg',
                    ],
                ],
            ],
            [
                'name' => 'Yuppie Psycho',
                'slug' => 'yuppie-psycho',
                'description' => '<p>First day at a new job? What a nightmare! </p><p>Join Brian Pasternack, a young man with no future in a dystopian 90s society, on his first day at one of the world’s largest companies, Sintracorp. Uncertain, unprepared, and massively unqualified, will Pasternack have what it takes to shine in Sintracorp’s hierarchy? It all depends on how he performs on his first assignment… and whether he survives it.</p><p>During his unconventional employee orientation, Pasternack discovers what his new job really entails: hunting a “witch” whose powers made the success of the corporation possible in the first place, but who now seems to have returned to torment its employees. Brian will meet all kinds of odd characters, escape from terrible creatures, and unravel the hidden secrets of Sintracorp’s dark past.</p>',
                'developer' => 'Baroque Decay',
                'publisher' => 'Another Indie',
                'release_date' => '2019-04-25 00:00:00',
                'bandcamp_embed_url' => 'https://bandcamp.com/EmbeddedPlayer/album=3296452031/size=large/bgcol=333333/linkcol=ffffff/transparent=true/',
                'youtube_embed_url' => 'https://www.youtube.com/embed/h92g7E2WYtc',
                'quote' => 'Yuppie Psycho manages to maintain a consistently tense and dreadful atmosphere. This is in part thanks to the absolutely incredible sound design and music of the game. The soundtrack elevates every scene of the game with ominous tunes and adrenaline-building beats, and the moments where the soundtrack cuts out entirely are often the most terrifying of all.',
                'quote_author' => 'The Sixth Axis',
                'links' => [
                    [
                        'name' => 'Purchase Soundtrack',
                        'icon' => 'link',
                        'url' => 'https://blackscreenrecords.com/products/yuppie-psycho-original-soundtrack-by-garoad',
                    ],
                    [
                        'name' => 'Website',
                        'icon' => 'link',
                        'url' => 'http://yuppiepsycho.com/',
                    ],
                    [
                        'name' => 'Steam',
                        'icon' => 'steam',
                        'url' => 'https://store.steampowered.com/app/597760/Yuppie_Psycho/',
                    ],
                ],
                'albums' => [
                    [
                        'name' => 'Yuppie Psycho - Original Soundtrack',
                        'url' => 'https://garoad.bandcamp.com/album/yuppie-psycho-original-soundtrack',
                        'image' => 'https://f4.bcbits.com/img/a2922336606_2.jpg',
                    ],
                ],
            ],
            [
                'name' => 'VA-11 Hall-A: Cyberpunk Bartender Action',
                'slug' => 'va11-hall-a',
                'description' => '<p>VA-11 HALL-A: Cyberpunk Bartender Action is a booze em&apos; up about waifus, technology, and post-dystopia life.</p><p>In this world, corporations reign supreme, all human life is infected with nanomachines designed to oppress them, and the terrifying White Knights ensure that everyone obeys the laws. </p><p>But, this is not about those people.</p><p>You are a bartender at VA-11 HALL-A, affectionately nicknamed &quot;Valhalla.&quot; Although it is just a small bar downtown, it attracts the most fascinating people this side of dystopia. Keep your clients lubricated and you will be made privy to the most interesting stories.</p>',
                'developer' => 'Subkeban Games',
                'publisher' => 'Ysbryd Games, AGM PLAYISM',
                'release_date' => '2016-06-21 00:00:00',
                'bandcamp_embed_url' => 'https://bandcamp.com/EmbeddedPlayer/album=2706423874/size=large/bgcol=333333/linkcol=ffffff/transparent=true/',
                'youtube_embed_url' => 'https://www.youtube.com/embed/7x393waFKDw',
                'quote' => 'Music plays a rather significant role in the development of a few of the characters, in addition to the traditional score being marvellous. Provided by Michael Kelly – who goes by Garoad – the soundtrack is a cyberpunk enthusiast’s dream.',
                'quote_author' => 'Push Square',
                'links' => [
                    [
                        'name' => 'Purchase Soundtrack',
                        'icon' => 'link',
                        'url' => 'https://blackscreenrecords.com/products/va-11-hall-a',
                    ],
                    [
                        'name' => 'Website',
                        'icon' => 'link',
                        'url' => 'https://waifubartending.com/',
                    ],
                    [
                        'name' => 'Steam',
                        'icon' => 'steam',
                        'url' => 'https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/',
                    ],
                    [
                        'name' => 'Nintendo Switch',
                        'icon' => 'link',
                        'url' => 'https://www.nintendo.com/games/detail/va-11-hall-a-cyberpunk-bartender-action-switch/',
                    ],
                    [
                        'name' => 'PlayStation 4',
                        'icon' => 'playstation',
                        'url' => 'https://store.playstation.com/en-us/product/UP2251-CUSA15402_00-VA11HALLANA00000',
                    ],
                ],
                'albums' => [
                    [
                        'name' => 'VA-11 HALL-A - Second Round',
                        'url' => 'https://garoad.bandcamp.com/album/va-11-hall-a-second-round',
                        'image' => 'https://f4.bcbits.com/img/a1141700252_2.jpg',
                    ],
                    [
                        'name' => 'VA-11 HALL-A Prologue OST - Sounds From The Future',
                        'url' => 'https://garoad.bandcamp.com/album/va-11-hall-a-prologue-ost-sounds-from-the-future',
                        'image' => 'https://f4.bcbits.com/img/a4291670717_2.jpg',
                    ],
                    [
                        'name' => 'VA-11 HALL-A EX - Bonus Tracks Collection',
                        'url' => 'https://garoad.bandcamp.com/album/va-11-hall-a-ex-bonus-tracks-collection',
                        'image' => 'https://f4.bcbits.com/img/a3878063584_2.jpg',
                    ],
                ],
            ],
        ]);

        $data->reverse()->each(function (array $project): void {
            $projectModel = Project::query()->create(Arr::except($project, 'albums'));

            collect($project['albums'])->each(function ($album) use ($projectModel): void {
                $albumModel = $projectModel->albums()->create(Arr::except($album, 'image'));

                if (Arr::has($album, 'image')) {
                    $albumModel->addMediaFromUrl(Arr::get($album, 'image'))->toMediaCollection('cover');
                }
            });
        });
    }
}
