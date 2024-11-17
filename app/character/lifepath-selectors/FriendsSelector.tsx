"use client"

import { useState } from "react";
import { LifepathFormData, FriendFormData } from "../formTypes"

interface FriendsSelectorProps {
    setValue: (field: keyof LifepathFormData, value: FriendFormData[]) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Relationship = string;

const relationships: Relationship[] = [
    "Like an older sibling to you.",
    "Like a younger sibling to you.",
    "A teacher or mentor.",
    "A partner or coworker.",
    "A former lover.",
    "An old enemy.",
    "Like a parent to you.",
    "An old childhood friend.",
    "Someone you know from The Street.",
    "Someone with a common interest or goal"
]

export default function FriendsSelector({setValue, onPrev, onNext}: FriendsSelectorProps) {

    const [friends, setFriends] = useState<FriendFormData[]>([]);
    const [nextId, setNextId] = useState(0);

    const addFriend = () => {
        const newFriend: FriendFormData = {id: nextId, relationship: null};
        setFriends((prevState) => [...prevState, newFriend]);
        setNextId((prevId) => prevId + 1)
    };

    const removeFriend = (id: number) => {
        setFriends((prevState) => prevState.filter((friend) => friend.id !== id));
    };

    const updateFriend = (id: number, status: string) => {
        setFriends((prevState) => 
            prevState.map((friend) => 
                friend.id === id ? {...friend, relationship: status} : friend
            )
        );
    };

    const handleSubmit = () => {
        setValue("friends", friends);
        onNext();
    };

    return (
        <div>
            {friends.map((friend, index) => (
                <div key={index}>
                    <h3>friend {index}</h3>
                    {relationships.map((status) => (
                        <button
                            type="button"
                            key={status}
                            onClick={() => updateFriend(friend.id, status)}
                        >
                            {status}
                        </button>
                    ))}
                    <button
                        type="button"
                        key={index}
                        onClick={() => removeFriend(friend.id)}
                    >
                    DELETE
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addFriend}
            >   
            ADD
            </button>
            <button onClick={onPrev}>PREV</button>
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    );
}