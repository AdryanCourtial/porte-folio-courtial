import React from "react"
import { ButtonCompetence } from "./ButtonCompetence"
import { CircleDecoration } from "./CircleDecoration"

export function PageCompetence({animation}){
    return (
        <div className=" mt-[30vh] mx-[15vw] flex flex-col">
            <ButtonCompetence
                image={require(`./../image/vue.png`)}
                gradient={'rgb(57,185,131) linear-gradient(312deg, rgba(57,185,131,1) 0%, rgba(52,73,94,1) 100%)'}
                position={'start'}
                text={'Vue.js'}
            />
            <ButtonCompetence
                image={require(`./../image/python.png`)}
                gradient={'rgb(55,118,171) linear-gradient(312deg, rgba(55,118,171,1) 0%, rgba(255,214,56,1) 100%)'}
                position={'end'}
                text={'Python'}
            />
            <ButtonCompetence
                image={require(`./../image/laravel.png`)}
                gradient={'rgb(255,41,25) linear-gradient(312deg, rgba(255,41,25,1) 0%, rgba(255,255,255,1) 100%)'}
                position={'start'}
                text={'Laravel'}
            />
            <ButtonCompetence
                image={require(`./../image/react.png`)}
                gradient={'rgb(0,216,255) linear-gradient(312deg, rgba(0,216,255,1) 0%, rgba(23,21,38,1) 100%)'}
                position={'end'}
                text={'React'}
            />
            <ButtonCompetence
                image={require(`./../image/docker.png`)}
                gradient={'rgb(36,150,237) linear-gradient(312deg, rgba(36,150,237,1) 0%, rgba(255,255,255,1) 100%)'}
                position={'start'}
                text={'Docker'}
            />
            <ButtonCompetence
                image={require(`./../image/git.png`)}
                gradient={'rgb(221,75,53) linear-gradient(312deg, rgba(221,75,53,1) 0%, rgba(255,255,255,1) 100%)'}
                position={'end'}
                text={'Git'}
            />
            <ButtonCompetence
                image={require(`./../image/python.png`)}
                gradient={'rgb(55,118,171) linear-gradient(312deg, rgba(55,118,171,1) 0%, rgba(255,214,56,1) 100%)'}
                position={'start'}
            />
            <CircleDecoration size={'20vh'} top={'20vh'} left={'10vw'}/>
            <CircleDecoration size={'15vh'} top={'32vh'} left={'45vw'}/>
            <CircleDecoration size={'15vh'} top={'86vh'} left={'17vw'}/>
            <CircleDecoration size={'60vh'} top={'-15vh'} left={'80vw'}/>
            <CircleDecoration size={'50vh'} top={'56vh'} left={'63vw'}/>
        </div>
    )
}