import React from "react";
import { MobileContext } from "../Context/MobileContext";
import { Paper, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";

interface LevelCardProps {
    level: "Gold" | "Silver" | "Bronze";
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionCard: {
            display: "flex",
            flexDirection: "column",
            color: theme.palette.text.secondary,
            boxShadow: "0px 0px 10px 2px black",
            padding: "1rem",
            height: "20rem",
            zIndex: 1,
            borderRadius: "0.25rem",
        },
        listItem: {
            textAlign: "left",
            paddingTop: "1rem",
            paddingLeft: "1rem",
        },
    }),
);

export default function LevelCard(props: LevelCardProps) {

    const classes = useStyles();

    let backgroundGradient: string;
    let cardTitle: React.ReactNode;
    let listItems: string[];

    if (props.level === "Gold") {
        cardTitle = <>Gold Level<br />($250+)</>;
        backgroundGradient = "linear-gradient(to bottom left, #cea110, #ead286, #cea110)";
        listItems = [
            "Your logo on our t-shirts",
            "Same benefits as Silver & Bronze",
        ];
    } else if (props.level === "Silver") {
        cardTitle = <>Silver Level<br />($100+)</>;
        backgroundGradient = "linear-gradient(to top right, #484848, #c1c0c0,  #484848)";
        listItems = [
            "Your logo on our robot",
            "Same benefits as Bronze",
        ];
    } else {
        cardTitle = <>Bronze Level<br />($50+)</>;
        backgroundGradient = "linear-gradient(to top right, #5f3d00, #bda780, #6d4700)";
        listItems = [
            "A spot here on the sponsors page",
        ];
    }

    return (
        <MobileContext.Consumer>
            {mobile => (
                <Paper
                    className={classes.sectionCard}
                    style={{
                        backgroundImage: backgroundGradient,
                        width: "80%",
                        maxWidth: "20rem",
                    }}
                >
                    <Typography className="levelTitle" align="center" variant="h2">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body1" align="left">
                        Includes:
                    </Typography>
                    {listItems.map((x: string, i: number) => {
                        return (
                            <Typography variant="body2" className={classes.listItem} key={i}>
                                {x}
                            </Typography>
                        );
                    })}
                </Paper>

            )}
        </MobileContext.Consumer>
    );
}