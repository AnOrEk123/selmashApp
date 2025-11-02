"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { IProfile } from "@/shared/types/profile.interface";

export default function ProfilePage() {
  const { node } = useParams();
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки карточек:", err);
        setLoading(false);
      });
  }, []);

  const currentProfile = profiles.find((profile) => profile.id == node);

  if (loading) {
    return <p className="text-center pt-30">Загрузка...</p>;
  }

  return (
    <div className="pt-30 flex flex-col items-center">
      {currentProfile ? (
        <>
        <Image src={currentProfile.img} alt="" width={50} height={50}/>
          <h1 className="text-2xl font-bold mb-10">{currentProfile.name}</h1>
          <p className="text-gray-700 text-center max-w-6xl">
            {currentProfile.points}
          </p>
        </>
      ) : (
        <p className="text-red-600">Профиль не найден</p>
      )}
    </div>
  );
}
