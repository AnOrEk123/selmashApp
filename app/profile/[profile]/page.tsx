interface ProfilePageProps {
  params: { id: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Профиль пользователя #{id}</h1>
      <p className="text-gray-700">
        Здесь можно отобразить данные пользователя (имя, почту, фото, активность и т.д.).
      </p>
    </div>
  );
}
