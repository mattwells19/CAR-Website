import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import OfficerCard, { OfficerCardProps } from "./OfficerCard";


interface AboutSectionProps {
    title: string,
    subtitle: string,
    content: OfficerCardProps[],
}

export default function AboutSection(props: AboutSectionProps) {
    return (
        <Paper component="section" elevation={24} className="card-group">
            <Typography variant="h1" align="center">
                {props.title}
            </Typography>
            <Typography style={{ paddingTop: "1rem", fontWeight: 300 }} variant="subtitle1" align="center">
                {props.subtitle}
            </Typography>
            <Divider />
            <div className="card-container">
                {
                    props.content.map((cardContent: OfficerCardProps) => {
                        return (
                            <OfficerCard
                                key={cardContent.name}
                                image={cardContent.image}
                                name={cardContent.name}
                                officer={cardContent.officer}
                                linkedIn={cardContent.linkedIn}
                            />
                        );
                    })
                }
            </div>
        </Paper>
    );
}