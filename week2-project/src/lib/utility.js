function SortBySection(items) {
    return items.sort((items, items2) => items.section - items2.section)
}

function getPages(items, rows) {
    return Math.ceil(items.length / rows)

}

function getRowInPages(items, rows, currentPage) {
    return items.slice((currentPage - 1) * rows, currentPage * rows)
}

function searchGroupWorks(items , keyword){
    let lowerCaseKeyWord = keyword.toLowerCase()
    return items.filter((items) => {
    items.section.toString().includes(lowerCaseKeyWord) ||
    items.groupName.includes(lowerCaseKeyWord) ||
    items.repo.includes(lowerCaseKeyWord) ||
    items.members.some(
        (member) =>
          member.studentId.toString().includes(lowerCaseKeyWord) ||
          member.studentName.toLowerCase().includes(lowerCaseKeyWord)
      )
    }
    )
} 

export { SortBySection, getPages, getRowInPages , searchGroupWorks}

