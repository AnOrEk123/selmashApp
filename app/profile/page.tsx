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
    fetch("/api/profiles")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки профилей:", err);
        setLoading(false);
      });
  }, []);

  const currentProfile = profiles.find((profile) => profile.id == '1');

  if (loading) {
    return <p className="text-center pt-30">Загрузка...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      {currentProfile ? (
        <>
        <Image src={currentProfile.img} alt="" width={100} height={100}/>
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
