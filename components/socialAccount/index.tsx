import React from 'react'
import { socialAccounts } from '@data/social_account'

export default function SocialAccounts() {
    let _socialAccounts = socialAccounts;

    if (_socialAccounts.length === 0) return null;

    return (
        <div className="resume_item resume_social">
            <div className="title">
                <p className="bold">Social</p>
            </div>
            <ul>
                {_socialAccounts.map((socialAccount, index) => (
                    <li key={index}>
                        <div className="icon">
                            <i className="fab fa-facebook-square"></i>
                        </div>
                        <div className="data">
                            <p className="semi-bold">{socialAccount.name}</p>
                            <a href={socialAccount.url} target="_blank" rel="noreferrer">
                                <p>{socialAccount.name}</p>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
