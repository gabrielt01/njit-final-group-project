import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/banner.png"
                                alt="logo"
                                className="h-6 w-auto"
                                height="24"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="http://eepurl.com/iFjGxI"
                            className="btn btn--secondary ml-4"
                        >
                            Join Today
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
                
            </SectionContainer>
            <div className="mt-5" style={{ background: 'linear-gradient(103deg, #382E0A -1.23%, #A69D74 99.83%)', height: '2px' }}></div>
        </header>
    );
};
