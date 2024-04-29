import React from 'react';
import {Game} from "../entities/game";
import DefenitionItem from "./DefenitionItem";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameAttributes = ({game}: Props) => {
    return (
        <SimpleGrid columns={2} as={'dl'}>
            <DefenitionItem term={'Platforms'}>
                {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
            </DefenitionItem>
            <DefenitionItem term={'Metascore'}>
                <CriticScore score={game.metacritic}></CriticScore>
            </DefenitionItem>
            <DefenitionItem term={'Genres'}>
                {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
            </DefenitionItem>
            <DefenitionItem term={'Publishers'}>
                {game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
            </DefenitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;