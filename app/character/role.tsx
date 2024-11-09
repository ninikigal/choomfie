function RoleForm() {
    return (
        <form>
            <label htmlFor="role">Choose a Role</label>
            <select id="role">
                <option value="rockerboy">Rockerboy</option>
                <option value="solo">Solo</option>
                <option value="netrunner">Netrunner</option>
                <option value="tech">Tech</option>
                <option value="medtech">Medtech</option>
                <option value="media">Media</option>
                <option value="exec">Exec</option>
                <option value="lawmen">Lawmen</option>
                <option value="fixer">Fixer</option>
                <option value="nomad">Nomad</option>
            </select>
            <button type="submit">Submit</button>
        </form>
        // Should have corresponding component to describe what role does in lore
    )
}

export default RoleForm