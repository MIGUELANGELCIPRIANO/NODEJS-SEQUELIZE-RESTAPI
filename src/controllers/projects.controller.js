import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js'

export const getProjects = async (req, res) => {
	try {
		const projects = await Project.findAll()
		res.json(projects)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const getproject = async (req, res) => {
	const { id } = req.params
	try {
		const project = await Project.findOne({
			where: {
				id,
			},
		})
		if (!project)
			return res.status(404).json({ message: 'Project does not exist' })
		res.json(project)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const getProjectTasks = async (req, res) => {
	const { id } = req.params
	try {
		const project = await Project.findOne({
			where: {
				id,
			},
		})
		if (!project)
			return res.status(404).json({ message: 'Project does not exist' })
		const tasks = await Task.findAll({
			where: {
				projectId: id,
			},
		})
		return tasks.length === 0
			? res
					.status(404)
					.json({ message: 'No tasks are assigned to this project' })
			: res.json(tasks)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const createProject = async (req, res) => {
	const { name, priority, description } = req.body
	try {
		const newProject = await Project.create({
			name,
			description,
			priority,
		})
		res.json(newProject)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const updateProject = async (req, res) => {
	const { id } = req.params
	const { name, priority, description } = req.body
	try {
		const project = await Project.findByPk(id)
		project.priority = priority
		project.name = name
		project.description = description
		await project.save()
		res.json(project)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const deleteProject = async (req, res) => {
	const { id } = req.params
	try {
		await Project.destroy({
			where: {
				id,
			},
		})
		res.sendStatus(204)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}
