import {Component, useEffect, useState} from "react";
import ExecProfile from "./ExecProfile";
import { exec } from "child_process";
import { AppDispatch, RootState } from './stores/store';
import { AddExecProfile, ExecProfileObject, selectProfile } from './slices/execProfileSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';


interface ExecProfilesState
{
}

interface ExecProfilesProps
{
}

class Profile
{
    public ID: number;
    
    public Name: string;
    
    public Position: number;
    
    public ImageID: string;
    
    public constructor(id: number, name: string, position: number, imageID: string)
    {
        this.ID = id;
        this.Name = name;
        this.Position = position;
        this.ImageID = imageID;
    }
}

export default function ExecProfiles({} : ExecProfilesProps)
{
    const profiles = useAppSelector(selectProfile);

    return (
        <>
            {
            [...profiles].sort((a, b) => (a.Position - b.Position)).map((profile: any, index: any) => {
                return <ExecProfile key={index} 
                                    Position={profile.Position} 
                                    ID={profile.ID} 
                                    Name={profile.Name} 
                                    ImageBuffer={`https://${process.env.APIURL}/${profile.ImageBuffer}`} 
                                    Description={profile.Description}/>;
                })
            }
        </>
    );
}