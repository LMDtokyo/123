import RootLayout from '@/app/layout';
import Abouts from '@/components/main/Pervak'; // Убедитесь, что имя компонента и путь правильные

export default function Home() {
    return (
        <RootLayout>
            <main className="h-full w-full">
                <div className="flex flex-col gap-20">
                    <Abouts /> {/* Используйте правильное имя компонента */}
                </div>
            </main>
        </RootLayout>
    );
}
