import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
	let data = new Date().getFullYear()

    return (
        <div className="flex justify-center text-white bg-indigo-800 border-t-4 border-indigo-400">
            <div className="container flex flex-col items-center px-4 py-8 md:px-6">

                <p className="mb-2 text-lg font-semibold">
                    Farmácia Generation | Copyright © {data}
                </p>

                <p className="mb-4 text-sm text-slate-200">
                    Acompanhe nossas redes sociais
                </p>

				<div className="flex gap-6">
					<a href="#" target="_blank" className="hover:text-rose-400 transition cursor-pointer">
						<LinkedinLogoIcon size={32} weight="bold"  />
					</a>
					
					<a href="#" target="_blank" className="hover:text-rose-400 transition cursor-pointer">
						<InstagramLogoIcon size={32} weight="bold" className="hover:text-rose-400 transition" />
					</a>

					<a href="#" target="_blank" className="hover:text-rose-400 transition cursor-pointer">
						<FacebookLogoIcon size={32} weight="bold" className="hover:text-rose-400 transition" />
					</a>
				</div>

			</div>
		</div>
	)
}

export default Footer