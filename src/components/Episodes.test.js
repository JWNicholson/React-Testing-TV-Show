import React from 'react';
import Episodes from './Episodes';
import { render, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockEpisode = [{
    id: 553945,
    image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"  
    },
    season: 1,
    episode: 1,
    summary: "<p>A young boy mysteriously disappears...</p>",
    runtime: 60
}]

test('Episodes render', () => {
    render(<Episodes episodes={mockEpisode}/>);
});


test('renders app when no data in the array', () => {
    render(<Episodes episodes={[]} />);
});

test('Episode Component renders all Elements', () => {
    const {getByTestId} = render(<Episodes episodes={mockEpisode}/>);

    const episodesDiv = getByTestId('episodes-container');
    const episodeDiv = getByTestId('episode');
    const episodeImg = getByTestId('episode-image');
    const episodeInfo = getByTestId('episode-info');
    const episodeNumber = getByTestId('episode-number');
    const episodeName = getByTestId('episode-name');
    const episodeRuntime = getByTestId('episode-runtime');

    const html = [
        episodesDiv,
        episodeDiv,
        episodeImg,
        episodeInfo,
        episodeNumber,
        episodeName,
        episodeRuntime
    ]
   
    console.log(html);

    html.forEach(html => {
        expect(html).toBeInTheDocument();
    });
});



