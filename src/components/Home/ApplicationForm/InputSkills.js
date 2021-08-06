import React, { Component } from 'react'
import './InputSkills.css';
import { useState } from "react";

class InputSkills extends Component {

    constructor(props) {
        super(props)

        this.state = {
            skills: []
        }
        this.inputRef = React.createRef()
    }
  


    // remove skill
    removeSkill = i => {
        const skills = this.state.skills
        skills.splice(i, 1)
        this.setState({
            skills: skills
        })
        console.log(skills)
    }

    // add skill
    addSkill = e => {
       
        const skills = this.state.skills
    
        const value = e.target.value
        if (e.key === "Enter" && value) {
            // check if duplicate skill
            if (skills.find(skill => skill.toLowerCase() === value.toLowerCase())) {
                return alert("No duplicate value allowed")
            }
            if (skills.length > 5) {
                return alert("Only 6 fields are allowed")
            }
            // else add skill to skills array
            skills.push(value)
            // set new state
            this.setState({
                skills
            })
            // when submit skill, set current input filed null
            this.inputRef.current.value = null
        } else if (e.key === "Backspace" && !value) {
            // if no value and hit backspace we will remove previous skill
            this.removeSkill(skills.length - 1)
        }
    }


    render() {
        
        const { skills } = this.state
        return (
            <>
                Add Other Skill (Maximum 6)

                <div className="skill border round" >
                    <div className="consistui">
                        <ul>
                            {skills.map((skill, i) => {
                                return (
                                    <li key={i}> {skill}

                                        <select class="form-select bg-warning urvinegi" aria-label="Default select example" >
                                            <option class="bg-warning" selected>Rate your skill</option>
                                            <option class="bg-light" value="1">⭐</option>
                                            <option class="bg-light" value="2">⭐⭐</option>
                                            <option class="bg-light" value="3">⭐⭐⭐</option>
                                            <option class="bg-light" value="4">⭐⭐⭐⭐</option>
                                            <option class="bg-light" value="5">⭐⭐⭐⭐⭐</option>
                                        </select>
                                        <button onClick={() => this.removeSkill(i)}>+</button>

                                    </li>
                                )
                            })}
                            <li className="input-skill">
                                <input name="skill" onKeyDown={this.addSkill} type="text" size="4" ref={this.inputRef} placeholder="Add skill here" value={this.state.value} 
/>
                            </li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

export default InputSkills