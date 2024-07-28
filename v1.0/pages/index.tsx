import RootLayout from '@/app/layout';
import Skill from '@/components/main/Serv'; // Убедитесь, что имя компонента и путь правильные

export default function Home() {
    return (
        <RootLayout>
            <main className="h-full w-full">
                <div className="flex flex-col gap-20">
                    <Skill /> {/* Используйте правильное имя компонента */}
                </div>
            </main>
        </RootLayout>
    );
}
