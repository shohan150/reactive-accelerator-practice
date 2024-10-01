import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

//if you want you can declare metadata of each route.
export const metadata = {
    title: "EcoVista",
    description: "One Place Dashboard for Eco Information",
};

// apply parallel routes here, on the layout.js file of "localhost:3000/[location]?lat= , lang= " route. means each component/route will act as indivudual pages on a single page. R parallel routes k prop hisebe pawa jai ebong shei k use korle e hoi. to j nam e parallel route gulo declare korechi shei nam ei props pacchi.
export default function RootLayout({
    children,
    weather,
    aqi,
    wind,
    temperature,
}) {
    return (
        <div className="wrapper">
            <div className="overlay"></div>
            <Image
                src="/background.png"
                className="bg-img"
                width={700}
                height={1200}
            />
            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temperature}
                    </div>
                </div>
            </main>
        </div>
    );
}
