import React, {useEffect, useState} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import withApollo from "@/hoc/withApollo";
import {useLazyGetUser} from "@/apollo/actions";

export const AppLink = ({children, className, href}) =>
    <Link href={href}>
        <a className={className}>{children}</a>
    </Link>


const AppNavbar = () =>{

    const [user, setUser] = useState(null);
    const [hasResponse, setHasResponse] = useState(false);
    const [getUser, {data, error}] = useLazyGetUser();


    useEffect(()=>{
        getUser();
    }, []);


    if(data){
        if(data.user && !user) setUser(data.user);

        if(!data.user && user) setUser(null);

        if(!hasResponse) setHasResponse(true);

    }

    return(
        <div className="navbar-wrapper">
            <Navbar expand="lg" className="navbar-dark fj-mw9">
                <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">  Hardeep Kaur </AppLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <AppLink href="/portfolios" className="nav-link mr-3">
                        Portfolio
                        </AppLink>
                        {/*<AppLink  href="/forum/categories" className="nav-link mr-3">*/}
                        {/*  Forums*/}
                        {/*</AppLink>*/}
                        <AppLink href="/cv" className="nav-link mr-3">
                           Cv
                        </AppLink>
                    </Nav>
                    { hasResponse &&
                        <Nav>
                            { user &&
                                <>
                                  <span className="nav-link mr-2">Welcome {user.userName}</span>
                                    <NavDropdown className="mr-2" title="Manage" id="basic-nav-dropdown">
                                        { (user.role === 'admin' ||user.role=== 'instructor') &&
                                        <AppLink href="/portfolios/new" className="dropdown-item">
                                            Create Portfolio
                                        </AppLink>

                                        }
                                    </NavDropdown>
                                    <AppLink href="/logout" className="nav-link btn btn-danger">
                                        Sign Out
                                    </AppLink>
                                </>

                            }
                            { (error || !user) &&
                                <>
                                    <AppLink href="/register" className="mr-3 nav-link">
                                        Sign Up
                                    </AppLink>
                                    <AppLink href="/login" className="mr-3 btn btn-success bg-green-2 bright">
                                        Sign In
                                    </AppLink>
                                </>
                            }

                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}
export default withApollo(AppNavbar);