import "./globals.scss";
//

import Nav from "@/components/nav";
import RecoilProvider from "./recoilProvider";
//
//

export const metadata = {
	title: {
		default: "북스토피아 - 도서 추천 및 평가 서비스 ",
		template: '%s | BooksTopia'
	},
	description: "북스토피아 도서 추천 및 평가 서비스",
	icons: {
		icon: '/icon.ico',
	}
}
//
//
//

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="kr">
			<body>
				<RecoilProvider>
					<div className="app">
						<Nav />

						{children}
					</div>
				</RecoilProvider>
			</body>
		</html>
	)
}